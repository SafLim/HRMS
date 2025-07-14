import StatCard from "../components/Dashboard/statCard";
import stats from "../components/Dashboard/statData";
export default function Dashboard(){
    return(
        <>
        <h1 className="text-2x1 font-bold text-gray-950"> Dashboard OVerview</h1>
        <div className="flex items-center justify-between">
            {stats.map((item, index) =>{
                return(
                    <StatCard
                    key={ index.title}
                    count={item.count}
                    icon={<item.icon/>}
                    color={item.color}
                    />
                );
            })}
        </div>
        </>
    )
}