// hello/index.ts
import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    try {
        context.res = { body: "Success!" };
    } catch (error) {
        const err = JSON.stringify(error);
        context.res = {
            status: 500,
            body: `Request error. ${err}`,
        };
    }
};

export default httpTrigger;