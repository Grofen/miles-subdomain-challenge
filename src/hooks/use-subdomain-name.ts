const useSubdomainName = (): {
  name: string;
  githubLink: string;
} => {
  const { hostname } = window.location;
  const subdomain = hostname.split(".")[0];
  const githubLink = "https://github.com/Grofen/miles-subdomain-challenge";

  if (subdomain === "d1") {
    return {
      name: "#1",
      githubLink,
    };
  } else if (subdomain === "d2") {
    return {
      name: "#2",
      githubLink,
    };
  }

  return {
    name: "Miles",
    githubLink,
  };
};

export default useSubdomainName;
