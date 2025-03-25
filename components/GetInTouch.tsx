"use client";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { LuLoaderCircle } from "react-icons/lu";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2),
});

const GetInTouch = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const fullname = values.fullName;
    const email = values.email;
    const message = values.message;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, message }),
      });

      if (response["status"] === 200) {
        form.reset();
        toast({
          variant: "success",
          description: "Message sent successfully",
        });
      }
    } catch {
      toast({
        variant: "destructive",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <section
      id="getInTouch"
      className="w-full px-[18vw] md:px-[27.7vw] py-[11.4vh] bg-pageblack"
    >
      <div className="flex flex-col">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <h1 className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-4xl text-white mb-3 text-center">
              Get In Touch
            </h1>
            <h3 className="text-navfontcolor text-xs md:text-sm mb-10 text-center">
              Got a question or proposal, or an exciting project you need help
              with? Go ahead.
            </h3>
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="form-size">
                  <FormLabel className="form-label">Your Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      className="form-input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="form-size">
                  <FormLabel className="form-label">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="form-input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="form-size">
                  <FormLabel className="form-label">Message</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
                      className="form-input"
                      rows={7}
                      minLength={30}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col px-[8.6vw] ">
              <Button
                className="primary-btn h-12"
                type="submit"
                disabled={isLoading}
              >
                <p className="text-sm text-white font-bold">Submit</p>
                {isLoading ? (
                  <LuLoaderCircle className="animate-spin" />
                ) : (
                  <IoIosArrowForward color="white" />
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default GetInTouch;
