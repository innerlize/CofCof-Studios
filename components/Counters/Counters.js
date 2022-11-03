import CountersStyles from './Counters.module.css';


export default function Counters() {
    return (
        <section className={CountersStyles.section}>
            <h3 className={CountersStyles.title}>We never stop <span>creating</span>.</h3>
            <div className={CountersStyles.all_counters_container}>
                <div className={CountersStyles.counter_container}>
                    <p className={CountersStyles.number}>47</p>
                    <p className={CountersStyles.category}>Movies</p>
                </div>
                <div className={CountersStyles.counter_container}>
                    <p className={CountersStyles.number}>127</p>
                    <p className={CountersStyles.category}>Projects</p>
                </div>
                <div className={CountersStyles.counter_container}>
                    <p className={CountersStyles.number}>31</p>
                    <p className={CountersStyles.category}>Games</p>
                </div>
            </div>
        </section>
    )
}