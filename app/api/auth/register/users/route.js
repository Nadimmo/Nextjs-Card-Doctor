import client from "@/lib/mongodb";

export  async function POST(req){
    const body = await req.json();
    const result = await client.db("CarPro").collection("Users").insertOne(body);
    return Response.json(result)
}