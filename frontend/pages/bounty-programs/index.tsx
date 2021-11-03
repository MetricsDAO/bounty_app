import { NextPage } from "next";
import { Box, Link } from "@chakra-ui/react";
import { useBountyProgramStore } from "../../lib/stores/BountyProgramsStore";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const BountyPrograms: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return <p>Redirecting...</p>;
};

export default BountyPrograms;
