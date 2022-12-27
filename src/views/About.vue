<template>
  <div>
      <h1>hey! 👋</h1>

  <div class="about">
    <div class="paragraph" style="margin-bottom: 60px;">
      <div>
        <div>
          I'm <strong>Sam</strong> 💖, a <a href="https://youtube.com/@samyam">YouTube content creator and</a> game developer.
          I graduated with a Computer Science degree, went to work in industry for a year, then quit to follow my passions :)
        </div>

        <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">cool games</router-link>, on <router-link to="/other-projects">weird projects</router-link>, and took part in <router-link to="/resume">a few other things</router-link> as well.</div> 
        
        <div style="margin-top: 20px;">I have over 30K subscribers on YouTube and have been sponsored in my videos by Unity, LootLocker, Machinations, Mental Checkpoint, and more.</div>

        <div style="margin-top: 20px;">You can reach me at <a href="mailto:sam@samyam.dev">sam@samyam.dev</a> or <router-link to="/contact">through here</router-link>.</div>
      </div>

    </div>
    <div class="photo">
      <img width="1000" src="img/profile.png" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>
  </div>
  </div>
</template>

<style scoped>

.about {
  margin-bottom: 100px;
  display: flex;
  align-items: flex-start;
}

.paragraph {
  width:60%;
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  width:40%;
  /* width: 150%; */
  margin-top: -40px;
  text-align: center;
}

@media only screen and (max-width: 499px) {
  .photo {
    align-content: center;
  }

  .photo img {
    width: 100%;
    /* visibility: hidden; */
  }

  .about {
    display: block;
    text-align: center;
    left: 50%;
    transform: translate(20%, 0);
  }

  h1 {
    margin-left: 40px;
    margin-top: 20px;
  }
}

@media only screen and (min-width: 500px) and (max-width: 999px) {
  .photo img {
    width: 70%;
  }
}

@media only screen and (min-width: 1000px) {
  .photo img {
    width: 90%;
  }
}
</style>