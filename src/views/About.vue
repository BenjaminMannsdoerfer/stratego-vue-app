<template>
  <div>
    <body class="backgroundd">
    <div class="spielfeld_img">
      <img class="img-fluid about-playfield" src="../assets/images/media/Stratego_plateau.jpg" alt="Stratego Spielbrett"
           title="Spielbrett Stratego"/>
    </div>

    <div class="row">
      <div class="col text-center">
        <h3 class="text-center">Gameplay:</h3>
        <p> Stratego is a strategy board game for two players. Each player has 40 pieces representing different
          characters.
          We modified the game a little bit so you can walk with all characters (except flag and bomb) just one field
          up, down, to the right or to the left.
          You also can attack the oppenents with your figures. To win the game you have to find and attack the flag of
          your enemy.</p>
      </div>

      <div class="col text-center">
        <div class="h3-text">
          <h3 style="padding-left:8px;">The figures are ranked from highest to lowest as follows:</h3>
        </div>
        <div>
          <table>
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td style="font-weight:bold;">0.Flag</td>
              <td><img src="../assets/images/media/figures/stratego-flag.svg" alt="player" width="30" height="60"/></td>
            </tr>
            <tr>
              <td style="font-weight:bold;">1.Spy</td>
              <td><img src="../assets/images/media/figures/stratego-spy.svg" alt="player" width="30" height="60"/></td>
            </tr>
            <tr>
              <td style="font-weight:bold;">2.Scout</td>
              <td><img src="../assets/images/media/figures/stratego-scout.svg" alt="player" width="30" height="60"/>
              </td>
            </tr>
            <tr>
              <td style="font-weight:bold;">3.Miner</td>
              <td><img src="../assets/images/media/figures/stratego-miner.svg" alt="player" width="30" height="60"/>
              </td>
            </tr>
            <tr>
              <td style="font-weight:bold;">4.Sergeant</td>
              <td><img src="../assets/images/media/figures/stratego-sergeant.svg" alt="player" width="30" height="60"/>
              </td>
            </tr>
            <tr>
              <td style="font-weight:bold;">5.Lieutenant</td>
              <td><img src="../assets/images/media/figures/stratego-lieutenant.svg" alt="player" width="30"
                       height="60"/></td>
            </tr>
            <tr>
              <td style="font-weight:bold;">6.Captain</td>
              <td><img src="../assets/images/media/figures/stratego-captain.svg" alt="player" width="30" height="60"/>
              </td>
            </tr>
            <tr>
              <td style="font-weight:bold;">7.Major</td>
              <td><img src="../assets/images/media/figures/stratego-major.svg" alt="player" width="30" height="60"/>
              </td>
            </tr>
            <tr>
              <td style="font-weight:bold;">8.Cononel</td>
              <td><img src="../assets/images/media/figures/stratego-colonel.svg" alt="player" width="30" height="60"/>
              </td>
            </tr>
            <tr>
              <td style="font-weight:bold;">9.General</td>
              <td><img src="../assets/images/media/figures/stratego-general.svg" alt="player" width="30" height="60"/>
              </td>
            </tr>
            <tr>
              <td style="font-weight:bold;">10.Marshal</td>
              <td><img src="../assets/images/media/figures/stratego-marshal.svg" alt="player" width="30" height="60"/>
              </td>
            </tr>
            <tr>
              <td style="font-weight:bold;">11.Bomb</td>
              <td><img src="../assets/images/media/figures/stratego-bomb.svg" alt="player" width="30" height="60"/></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="rules col">
        <h3 class="text-center">Rules:</h3>
        <ul class="char text-center">
          <li>Flag is the most important figure</li>
          <li>Miner and Bomb: only the miner can defuse the Bomb</li>
          <li>Every other figure loses against the Bomb</li>
          <li>Spy and Marshal: only Spy can beat the Marshal except the bomb</li>
          <li>Flag and Bomb can’t be moved</li>
        </ul>
      </div>
    </div>
    <div class="screenshot">
      <h3>Screenshots:</h3>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block img-fluid " src="../assets/images/media/start_screen.png" alt="First slide" width="513"
                 height="500">
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid " src="../assets/images/media/game_screen.png" alt="Second slide" width="669"
                 height="500">
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid " src="../assets/images/media/move_screen.png" alt="Third slide" width="669"
                 height="500">
          </div>
        </div>
        <a class="carousel-control-prev" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="github_box">
      <h3>You want to contribute to our project?</h3>
      <form action="https://github.com/BenjaminMannsdoerfer/stratego-vue-app" target="_blank">
        <a href="https://github.com/BenjaminMannsdoerfer/stratego-vue-app"
           class="btn btn-dark btn-lg btn-primary-spacing" role="button">Our Github repository</a>
      </form>
    </div>
    <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="#c08d2b"
        @click="toTop"
    >
      <v-icon color="black">mdi-arrow-up</v-icon>
    </v-btn>
    </body>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
  data: () => ({
    fab: false,
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  }),
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}

</script>
<style>
@import '../assets/styles/main.css';
</style>