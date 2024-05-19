import Food from "../model/food.model.js";

export const getFood = async (req, res) => {
    try {
        const food = await Food.find();
        res.status(200).json(food);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json(error);
    }
};
