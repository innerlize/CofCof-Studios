import FeaturesStyle from './Features.module.scss';


export default function Features() {
    return (
        <article className={FeaturesStyle.article}>
            <div className={FeaturesStyle.feature}>
                <div className={FeaturesStyle.feature_image}></div>
                <h4 className={FeaturesStyle.feature_title}>ALWAYS BY YOUR <br /> SIDE</h4>
                <p className={FeaturesStyle.feature_desc}>Because we have a significant experience with diverse pipelines, we seamlessly integrate them into our partner&apos;s processes and vice versa, minimizing errors and ensuring an efficient production. We cover the entire production cycle from pre-production to LiveOps.</p>
            </div>

            <div className={FeaturesStyle.feature}>
                <div className={FeaturesStyle.feature_image}></div>
                <h4 className={FeaturesStyle.feature_title}>EXPERIENCE ALSO <br /> MATTERS</h4>
                <p className={FeaturesStyle.feature_desc}>Some of the largest companies in the world have trusted us, including Malditomaus, Amblagar, Namamba, Vascolo, and more. <br /> <br /> We have a diverse team of specialists working together to bring your vision to life like no one else can.</p>
            </div>

            <div className={FeaturesStyle.feature}>
                <div className={FeaturesStyle.feature_image}></div>
                <h4 className={FeaturesStyle.feature_title}>FINISH YOUR PROJECT ON TIME</h4>
                <p className={FeaturesStyle.feature_desc}>Our team is committed to meeting all deadlines set by clients. We strive to deliver projects on time and, of course, ensure client expectations are always met and exceeded. <br /> <br /> We <span>really</span> appreciate your time.</p>
            </div>
        </article>
    )
}