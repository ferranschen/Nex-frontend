import { Select, Option } from "@material-tailwind/react";

export default function QuestionList({ question, options }) {
    return (
        // <div className="w-full">
            <label className="block mb-4">
                <span className="text-gray-700">
                    {question}
                </span>
            <Select label="Select an option" color="blue">
                {options?.map((option, index) => (
                    <Option key={index}>{option}</Option>
                ))}
            </Select>
            </label>
        // </div>
    );
}