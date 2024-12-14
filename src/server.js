import { createServer } from "miragejs"

createServer({
    routes() {
        this.namespace = "api"
        this.timing = 750;

        this.post("/execute", (schema, request) => {
            let { language, code } = JSON.parse(request.requestBody)
            if (language === "javascript" && code === 'console.log("Hello, world!")' || code === "console.log('Hello, world!')") {
                return {
                    status: "success",
                    output: "Hello, world!"
                }

            } else if (language === "golang" && code === 'fmt.Println(\"Hello, world!\")') {
                return {
                    status: "success",
                    output: "Hello, world!"
                }
            } else {
                return {
                    status: "error",
                    error: "SyntaxError: Unexpected token"
                }
            }

        })
    },
})