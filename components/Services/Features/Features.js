import FeaturesStyle from './Features.module.scss';


export default function Features() {
    return (
        <article className={FeaturesStyle.article}>
            <div className={FeaturesStyle.feature}>
                <div className={FeaturesStyle.feature_image}></div>
                <h4 className={FeaturesStyle.feature_title}>ALWAYS AT YOUR <br /> SIDE</h4>
                <p className={FeaturesStyle.feature_desc}>We adapt to different pipelines and this makes it easier for us to enter our partners' processes and vice versa, minimizing errors, ensuring efficient production. We cover complete pre-production and production cycles.</p>
            </div>

            <div className={FeaturesStyle.feature}>
                <div className={FeaturesStyle.feature_image}></div>
                <h4 className={FeaturesStyle.feature_title}>EXPERIENCE MATTERS <br /> TOO</h4>
                <p className={FeaturesStyle.feature_desc}>Some of the biggest companies in the world have trusted us, such as Malditomaus, Amblagar, Namamba or Vascolo, among others.  <br /> <br /> We have a diverse team of specialists working together to bring your vision to life.</p>
            </div>

            <div className={FeaturesStyle.feature}>
                <div className={FeaturesStyle.feature_image}></div>
                <h4 className={FeaturesStyle.feature_title}>FINISH YOUR PROJECT ON TIME</h4>
                <p className={FeaturesStyle.feature_desc}>We strive to deliver projects on time and, of course, ensure that client expectations are always met and exceeded. <br /> <br /> Time is <span>important</span> to us.</p>
            </div>
        </article>
    )
}