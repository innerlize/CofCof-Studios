import SpecialServicesStyles from './SpecialServices.module.css';
import Image from 'next/image';


export default function SpecialServices() {
    return (
        <article className={SpecialServicesStyles.article}>
            <div className={SpecialServicesStyles.service_container}>
                <h3 className={SpecialServicesStyles.title}>ADVANCED RIGGING</h3>
                <p className={SpecialServicesStyles.question}>What does good rigging solve? How to animate a 3D asset?</p>
                <p className={SpecialServicesStyles.desc}>
                    We approach a good rig from pre-production, solving many of the future problems in production and guaranteeing consistency in animation.

                    We make facial capture systems or mocap of different shapes and different assets to be reused. We adapt, create and reuse rigs from any pipeline: Unreal Engine, Unity, Maya and more.

                    Reduce your production time and costs with our rigging service.
                </p>
                <div className={SpecialServicesStyles.gif_container}>
                    <Image className={SpecialServicesStyles.gif} src='/SpecialServices_Gifs/Rigging.gif' fill />
                </div>
            </div>
            <div className={SpecialServicesStyles.service_container}>
                <h3 className={SpecialServicesStyles.title}>PIPELINE & TOOLS DEVELOPMENT</h3>
                <p className={SpecialServicesStyles.question}>What is a 3D Pipeline? Why is a good pipeline important? How does it benefit production and business?</p>
                <p className={SpecialServicesStyles.desc}>
                    A 3D Pipeline is a vision for sustainable and scalable development through design and engineering standards.
                    
                    We believe that standards are a good thing for all companies. That's why we have created several 3D Pipeline models to help ensure, productivity and your workers.
                    
                    Cofcof Studios builds and structures within each DCCs (Perforce, Shotgrid, Maya, Blender, and more) tools to generate a fast and automated workflow to drastically reduce human error so that production can focus on more important processes that require more detail and attention from staff.
                </p>
                <div className={SpecialServicesStyles.gif_container}>
                    <Image className={SpecialServicesStyles.gif} src='/SpecialServices_Gifs/Pipeline.gif' fill />
                </div>
            </div>
            <div className={SpecialServicesStyles.service_container}>
                <h3 className={SpecialServicesStyles.title}>FULL 3D ASSET CYCLE</h3>
                <p className={SpecialServicesStyles.question}>Do you need to create a complete 3D asset ready for production use? Do you have the idea and want to realize the complete 3D asset?</p>
                <p className={SpecialServicesStyles.desc}>CofCof Studios will completely take care of all the processes and complements of the production of your game or movie, including organic characters, inorganic objects, elements of a scene or modular levels, a whole cycle from contextual description, concept art, 3D modeling high and low poly, uv (simple or UDIM), textures (all necessary passes), materials, shading, file order (naming, scaling, optimizations), variations, different formats, compatibility with different 3D programs or graphic engines.</p>
                <div className={SpecialServicesStyles.gif_container}>
                    <Image className={SpecialServicesStyles.gif} src='/SpecialServices_Gifs/3DAssets.gif' fill />
                </div>
            </div>
            <div className={SpecialServicesStyles.service_container}>
                <h3 className={SpecialServicesStyles.title}>VFX / REAL-TIME</h3>
                <p className={SpecialServicesStyles.question}>Do you want more realism in your scenes or 3D assets, do you want to create magic where there is none?</p>
                <p className={SpecialServicesStyles.desc}>
                    We create components with mixed techniques, particles, fluids, smoke, destruction, explosions, water simulation, fire, clothing simulation, and more.

                    Cofcof uses the latest effects and big screen techniques to reach the desired result for the client, we apply it in real time (Unreal, Unity) as well as for movies (render engines).
                </p>
                <div className={SpecialServicesStyles.gif_container}>
                    <Image className={SpecialServicesStyles.gif} src='/SpecialServices_Gifs/VFX.gif' fill />
                </div>
            </div>
        </article>
    )
}