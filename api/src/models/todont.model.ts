import Todont from "./todont.schema";

const createTodont = async (description: string): Promise<Todont> => {
    return Todont.create({ description });
};

export { createTodont };
