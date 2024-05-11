import Airtable from "airtable";

export const createRecord = async () => {
    const apiKey = process.env.AIRTABLE_TOKEN
    try {
        var base = new Airtable({ apiKey }).base('BASE ID');
        return await base("TABLE NAME").create({
            name: "asdsa"
        })
    } catch (error: any) {
        debugger
    }
}