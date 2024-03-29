import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";

export default async function middleare(req: NextRequest) {
    if(req.nextUrl.pathname === "/"){
        //Track Analytics Event
        try{
            analytics.track("pageview", {
                page: '/',
                country: req.geo?.country
            })

        } catch(err){
            //Fail silently
           console.error(err)
        }
    }

    return NextResponse.next()
}

export const matcher = {
    matcher: ['/']
}