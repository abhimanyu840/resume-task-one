import { ChildProps } from "@/app/money/page";

const Child2: React.FC<ChildProps> = ({ setMoney }) => {
    return (
        <button
            className="bg-red-500 text-white p-2 rounded"
            onClick={() => setMoney((prev) => prev - 500)}
        >
            Decrement by 500
        </button>
    );
};

export default Child2;
