"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 bg-background">
      <motion.h1
        className="text-6xl sm:text-8xl font-bold tracking-tight text-foreground"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-2xl sm:text-4xl font-semibold text-foreground mt-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Page Not Found
      </motion.h2>

      <motion.p
        className="text-muted-foreground text-lg sm:text-xl mt-4 max-w-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Oops! The page you’re looking for does not exist or has been moved.
        Let’s get you back on track.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Link href="/" passHref>
          <Button size="lg" className="gap-2">
            Go Home <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
        <Link href="/contact" passHref>
          <Button size="lg" variant="outline" className="gap-2">
            Contact Support
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}
