<template>
  <div class="banner w-full h-[550px] bg-cover bg-no-repeat bg-center flex items-end md:items-center justify-center md:justify-start text-center md:text-left">
    <div class="text-white mx-10 md:mx-32 w-full ssm:w-[450px]">
      <h2 class="text-1xl md:text-3xl tracking-wider">"WE STAND FOR CREATING THINGS THAT ARE DIFFERENT AND TRULY UNIQUE"</h2>
      <p class="text-base md:text-xl pb-[50px] md:pb-0">Take a look at what makes Nepack so special and why we're committed to delivering you the best products for your hair</p>
    </div>
  </div>

  <div class="story">
    <div class="flex justify-center items-center">
      <div class="px-16 md:px-32 lg:px-64 xl:px-96 py-20 text-center">
        <span class="border-b-2 border-blue-500 text-lg font-medium text-blue-500">OUR MISSION</span>
        <div class="text-gray-500 leading-7 m-10">
          When BluMaan started, our mission has always been to help you find your personal style through the power of hair styling. We also believe that to achieve the best hairstyle, your hair needs to be at optimum health. All our products are made in the USA with ingredients that nourish your hair and are safe for daily use.
        </div>
        <div class="text-gray-500 leading-7 mb-6">
          We are here to help and guide you to achieve a look that is unique to you - through information and products that are catered for you.
        </div>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-between flex-col lg:flex-row mx-10 md:mx-32 gap-14 mb-20">
    <div class="basis-1 md:basis-1/2" id="image">
      <img src="../assets/img/Gordon_Hayward_resize_950x.webp" alt="Your Image" />
    </div>
    <div class="text-left-container flex flex-col justify-center text-center lg:text-left basis-1 md:basis-2/3" id="text">
      <p class="h2 story-page-title">
        <span class="border-b-2 border-blue-500 text-lg font-medium tracking-wider text-blue-500">OUR COMMITMENT</span>
        <h1 class="font-bold text-lg md:text-2xl my-5">Creating quality products that work</h1>
      </p>
      <div class="text-gray-500 leading-7 mb-6" bis_skin_checked="1">
        <p>With your constant help, we’ve created products that meet specific needs for different hair types. We have proudly created clay, pomade, wax and paste products that continually help shape and mold all sorts of hairstyles.</p>
        <p>We are committed to creating quality products that work for you. For each product development process, we ideate based on what you want and reiterate based on the feedback we get from our community. That is our commitment to you. &nbsp;</p>
      </div>
    </div>
  </div>

  <div class="w-full h-[500px] md:h-[600px] xl:h-[800px] bg-cover bg-no-repeat bg-center bg-[url('./img/building_02-min_1944x.webp')]"></div>

  <div class="story bg-gray-100">
    <div class="flex justify-center items-center">
      <div class="px-16 md:px-32 lg:px-64 xl:px-96 py-20 text-center">
        <span class="border-b-2 border-blue-500 text-lg font-medium text-blue-500">OUR BEGINNINGS</span>
        <div class="text-gray-500 leading-7 m-10">
          Founded in 2014, BluMaan is a men’s grooming company born in Vancouver, Canada - a place known for its nature, start-up culture, and friendly people!
        </div>
        <div class="text-gray-500 leading-7 mb-6">
          At the time, Joseph Andrews and Benjamin Weir (co-founders of BluMaan) felt that there was a lack of quality men's hair products in the market that could deliver the results people wanted. Traditional beauty companies rarely reached out to enough customers to understand what they wanted. Driven by Joseph's expanding YouTube presence, he took matters into his own hands and noticed that many of his viewers struggled to find a versatile, non-toxic, high-hold hair styling product. That was how BluMaan’s Original Styling Meraki was created.
        </div>
        <div class="text-gray-500 leading-7 mb-6">
          As an online company, our employees extend from all over the world - from Canada, the United States, and Finland. We are continuously growing and carefully adding members as we go.
        </div>
      </div>
    </div>
  </div>
  <div class="story">
    <div class="flex justify-center items-center">
      <div class="px-20 lg:px-44 py-20 text-center">
        <span class="border-b-2 border-blue-500 text-lg font-medium text-blue-500">PRODUCT EXCELLENCE</span>
        <div class="flex flex-col lg:flex-row gap-10 my-10 text-center lg:text-left">
        <div class="text-gray-500 basis-1/3">
          <div class="text-black font-semibold text-xl pb-5">Catering To Your Hair Needs Inside And Out</div>
         We care about what you put on your hair and body, so we purposely choose ingredients that help with nourishment and protection, allowing you to focus on styling your hair with no worries.
        </div>
        <div class="text-gray-500 basis-1/3">
          <div class="text-black font-semibold text-xl pb-5">CInvolving The Best People For The Job</div>
         To create products that work well, we search across the world for the best chemists, brewers and formulators who are renowned for their skills in developing hair products.
        </div>
        <div class="text-gray-500 basis-1/3">
          <div class="text-black font-semibold text-xl pb-5">BluFam, The Tribe That Values Self-Expression</div>
        Here at BluMaan we believe that family comes first. Our BluFam is made up of people all over the world who are not afraid to express their own style. The community we’ve built constantly emits positive energy through supportive feedback and helpful advice. We set out to create hair products that not only work but make people feel great on the inside.
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.banner {
  background-image: url("../assets/img/blumaan-founder-quote-with-paper-tears-4000x_1944x.webp");
}

@media screen and (max-width: 1200px) {
  .banner {
    background-position: 80% center;
    height: 500px; /* Độ cao của banner */
  }
}

@media screen and (max-width: 768px) {
  .banner {
    background-image: url("../assets/img/BMFQ_mbl.webp");
    background-position: center center;
    height: 800px;
  }
}
</style>
