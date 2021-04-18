<template>
  <div class="">
     <h1 class="text-xl italic font-semibold text-center pt-20">
      ✧ More Vaccine for you ✦
    </h1>
    <div class="h-screen">

      <div class="bg-green-200 h-3/6 min-h-0 w-11/12 mx-auto mt-10 p-5 rounded-full">
        <img
          src="../assets/vaccine/pfizer_b.png"
          class="h-full rounded-lg float-left mx-10"
        />
        <div id="text" class="inline text-left ml-44 space-y-4 text-lg">
          <h1 class="text-2xl mb-12 mt-5 italic font-semibold">
            Name : Pfizer-BioNTech
          </h1>
        <p >Owner Country :</p>
          <img src="https://thaiphotos.net/download/UHVBeWt3TTdweFpYSXdNWWpldTdQZz09" class="rounded-3xl h-11 inline "/>+
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Flag_of_Germany_%283-2_aspect_ratio%29.svg/1280px-Flag_of_Germany_%283-2_aspect_ratio%29.svg.png"
            class="rounded-full h-14 inline"/>
        <p>Technology : The new mRNA technology tricks the body into making the
           viral protein itself which, in turn, triggers an immune response.
        </p>
        <p>Efficientcy : 62-90%</p>
        <p>Process : Passed all three trials</p>
        <p>Dose Required : 2</p>
        </div>
      </div>

      <div class="bg-green-100 h-3/6 min-h-0 w-11/12 mx-auto mt-10 p-5 rounded-full">
        <img
          src="../assets/vaccine/jj_b.png"
          class="h-full rounded-lg float-left mx-10 "
        />
        <div id="text" class="inline text-left ml-44 space-y-4 text-lg">
          <h1 class="text-2xl mb-12 mt-4 italic font-semibold">
            Name : Johnson&Johnson
          </h1>
        <p>Name : Johnson&Johnson</p>
        <p>Owner Country :
          <img src="https://thaiphotos.net/download/UHVBeWt3TTdweFpYSXdNWWpldTdQZz09" class="rounded-3xl h-11 "/>
        </p>
        <p>Technology : Uses a Covid virus to deliver genetic material from the
            coronavirus into the body to prompt an immune response.
        </p>
        <p>Efficientcy : CDC and FDA have recommended a pause in the use of the Janssen (Johnson & Johnson) COVID-19 vaccine <br> in the United States</p>
        <p>Process : Passed all three trials</p>
        <p>Dose Required : 1</p>
        </div>
      </div>

      <div class="bg-green-200 h-3/6 min-h-0 w-11/12 mx-auto mt-10 p-5 rounded-full">
        <img
          src="../assets/vaccine/moderna_b.png"
          class="h-full rounded-lg float-left mx-10"
        />
        <div id="text" class="inline text-left ml-44 space-y-4 text-lg">
          <h1 class="text-2xl mb-4 mt-5 italic font-semibold">
            Name : Moderna
          </h1>
        <p >Owner Country :</p>
          <img src="https://thaiphotos.net/download/UHVBeWt3TTdweFpYSXdNWWpldTdQZz09" class="rounded-3xl h-11 inline "/>
        <p>Technology : A new type of vaccine which uses messenger RNA, which
            contains instructions for human cells <br>
            to make proteins that mimic part of the coronavirus, to trigger an
            immune response.
        </p>
        <p>Efficientcy : 95%</p>
        <p>Process : Passed all three trials</p>
        <p>Dose Required : 2</p>
        </div>
      </div>

      <div class="bg-green-100 h-3/6 min-h-0 w-11/12 mx-auto mt-10 p-5 rounded-full">
        <img
          src="../assets/vaccine/astra_b.png"
          alt=""
          class="h-full rounded-lg float-left mx-10"
        />
        <div id="text" class="inline text-left ml-44 space-y-4 text-lg">
          <h1 class="text-2xl mb-4 mt-5 italic font-semibold">
            Name : AstraZeneca
          </h1>
        <p >Owner Country :</p>
        <img src="https://quinl.quinlcdn.com/productImages/UploadImages/2103/1616996675_67182.png"
              class="rounded-3xl h-11 inline"
            />+<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/240px-Flag_of_Sweden.svg.png"
              class="rounded-3xl h-11 inline"
        >
        <p>Technology : Viral Vector(Genetically Modified virus) When injected,
            the vaccine instructs human cells to produce <br />
            the SARS-CoV-2 spike protein - the immune system's main target in
            Coronaviruses.
        </p>
        <p>Efficientcy : 62-90%</p>
        <p>Process : Passed all three trials</p>
        <p>Dose Required : 2</p>
        </div>
      </div>

      <div class="bg-green-200 h-3/6 min-h-0 w-11/12 mx-auto mt-10 p-5 rounded-full">
        <img
          src="../assets/vaccine/sinovac_b.png"
          alt=""
          class="h-full rounded-lg float-left mx-10"
        />
        <div id="text" class="inline text-left ml-44 space-y-4 text-lg">
          <h1 class="text-2xl mb-4 mt-9 italic font-semibold">
            Name : Sinovac
          </h1>
        <p >Owner Country :</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/225px-Flag_of_the_People%27s_Republic_of_China.svg.png" class="rounded-3xl h-11 inline "/>
        <p>Technology : Inactive vaccine, using the dead Covid-19 virus itself
            to trigger an immune response.
        </p>
        <p>Efficientcy : 50-70%</p>
        <p>Process : Passed three trials</p>
        <p>Dose Required : 2</p>
        </div>
      </div>

    <div class="flex justify-center pt-12">
      <button @click="finishfilled" class="m-2 mb-10 px-8 py-2 bg-red-500 rounded-md text-white hover:bg-blue-900">Reserse Vaccine</button><br>
    </div>
     
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    finishfilled(){
      this.$router.push('/form')
    }
  },
}
</script>

<style>

</style>