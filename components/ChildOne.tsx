import { ChildProps } from "@/app/money/page";

const Child1: React.FC<ChildProps> = ({ setMoney }) => {
    return (
        <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => setMoney((prev) => prev + 1000)}
        >
            Increment by 1000
        </button>
    );
};

export default Child1