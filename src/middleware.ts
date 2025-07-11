import { NextRequest, NextResponse } from 'next/server';

// const fetchUserDetails = async (token: string) => {
//   const userDetailsResp = await fetch(
//     process.env.NEXT_PUBLIC_API_URL + "/v1/user/auth/user-details",
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   return (await userDetailsResp?.json()) || {};
// };

const unAuthUserRoutes = [
  "/login",
  "/create-account",
  "/reset-password",
  "/set-password",
  "/verify-code",
  "/create-new-password",
  "/rent-out",
  "/contact",
  "/plans",
  "/subscription"
];

const userAuthRoutes = [
  "/dashboard",
  "/dashboard/rental-profile",
  "/dashboard/blogspot",
  // "/dashboard/blogspot/[post]",
  "/dashboard/subscription",
  "/dashboard/settings",
  "/dashboard/faq"
];

export const middleware = async (request: NextRequest) => {
  const token = request?.cookies?.get("_token")?.value;
  const isUserAuthenticated = !!token;
  // let userDetails = {};
  // if (token) {
  //   try {
  //     const userDetailsRes = await fetchUserDetails(token);
  //     userDetails = userDetailsRes?.data || {};
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // }  
  const activePath = request?.nextUrl?.pathname;
  if (
    !isUserAuthenticated &&
    (
      // userAuthRoutes.some(route => activePath.startsWith(route)) &&
      userAuthRoutes.includes(activePath) ||
      activePath.includes("/dashboard/blogspot/")
    )
  ) {
    // return NextResponse.redirect(new URL("/login", request.url));
    return NextResponse.redirect(new URL("/login"+ request?.nextUrl.search, request.url));

  }

  if (
    isUserAuthenticated &&
    (!userAuthRoutes.some(route => activePath.startsWith(route)) &&
      !activePath.includes("/dashboard/blogspot/"))
  ) {
    return NextResponse.redirect(new URL("/dashboard/how-work", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/create-account",
    "/reset-password",
    "/set-password",
    "/verify-code",
    "/create-new-password",
    "/rent-out",
    "/contact",
    "/plan",
    "/subscription",
    "/login",
    "/create-account",
    "/dashboard",
    "/dashboard/rental-profile",
    // "/dashboard/blogspot",
    "/dashboard/blogspot/:path*",
    "/dashboard/subscription",
    "/dashboard/settings",
    "/dashboard/faq"
  ],
}