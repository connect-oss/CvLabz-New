"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { MotionGlobalConfig } from "framer-motion";

export default function AnimationConfig() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const shouldSkip = searchParams.get("shouldSkipAnimations") === "true";
    const isEditable = searchParams.get("mode") === "editable";
    if (shouldSkip || isEditable) {
      MotionGlobalConfig.skipAnimations = true;
    }
  }, [searchParams]);

  return null;
}
