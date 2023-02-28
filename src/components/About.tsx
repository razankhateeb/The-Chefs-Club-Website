import '../../public/style.css'

export function AboutRest (){
    return <section id="about" className="about">
    <div className="container" data-aos="fade-up">

      <div className="section-header">
        <h2 className='title mt-3'>The Chefs Club</h2>
        <p>Welcome to The Chefs Club, where culinary creativity meets international inspiration. Our restaurant is dedicated to crafting delicious, globally-inspired dishes that use the freshest, locally-sourced ingredients. Our talented team of chefs hails from around the world, and their passion for food and diverse culinary backgrounds come together to create a truly unique dining experience.

Our menu features a range of dishes from across the globe, from the tangy flavors of Mexican cuisine to the rich, savory tastes of French classics. Our menu changes seasonally, ensuring that we are always using the freshest ingredients available. Whether you're stopping in for a quick bite or settling in for a long, leisurely meal, you're sure to find something that tantalizes your taste buds at The Chefs Club.</p>
      </div>

     <img
        className="d-block w-100 mb-5"
        src="../../public/imgs/restaurant.jpg"
        style={{ objectFit: "cover", position: "relative" }}
        height={500}
    />

    </div>
  </section>
}