"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Common from "@/utils/model.util";

export const CustomHook = (customSlug = "") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    fetchData();
  }, [pathname, customSlug]);

  const fetchData = async () => {
    try {
      const slug = customSlug || pathname.split("/").pop();
      const res = await Common.data(slug);
      setData(res[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };
};
