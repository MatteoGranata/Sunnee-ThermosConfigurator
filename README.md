# SUNNEE CONFIGURATOR WHIT VUEROUTER.JS 3 


<table>
<tr>
<td>
Using VueRouter.js 3, this website offers a simple and intuitive experience for setting up a thermos for the (invented) company Sunnee.

With the aim of creating a configurator for a thermos for an invented company that produces swimsuits with recycled plastic and to promote its new children's line it gave away a customizable thermos with the first order.
</td>
</tr>
</table>


## Demo
Live demo: <a href="https://main--sunnee.netlify.app/" target="_blank">HERE</a>.</h4>
<br>
![](https://komarev.com/ghpvc/?username=MatteoGranata&color=e2b6ff&style=flat-square)

## Site

### Home Page
The website appears clean and intuitive, avoiding overloading the interface with too many details or unnecessary elements. With a prominent preview of the thermos and its logo above, vibrant and eye-catching colors have been chosen for customization.

![](https://i.postimg.cc/8kbPSqSQ/Screenshot-2024-03-06-130958.png)

### Structure
The project is divided into 7 different Vue.js components, each with specific responsibilities to facilitate code management and maintenance.

- [App.vue]: It is the root of the Vue.js application. It contains only the `<router-view>` component, which is responsible for displaying the component based on the current URL.

- [Welcome.vue]: Manages the welcome page of the configurator and provides a button to start configuring the bottle.

- [Thanks.vue]: It is the final component that thanks the user for their choice and provides a summary of the choices made, with the possibility to modify them.
 
- [Config.vue]: The main component of the Vue.js application is the parent component of all the customization steps. It manages navigation between the different steps and shows a real-time preview of the customized thermos bottle. Additionally, it handles color selection events.

- [Step1.vue,Step2.vue,Step3.vue]: These components represent the individual steps of the customization process, allowing each step to select a different color for a specific part of the thermos. CSS is only written in one step, making code management easier without repetitions.


### Instructions for download

`Git bash` and `Node.js` are required for correct installation.

```sh
git clone https://github.com/MatteoGranata/Sunnee-ThermosConfigurator.git
```
```sh
cd Sunnee-ThermosConfigurator
```
```sh
npm install 
```
```sh
npm run dev
```
and press on the generated link for the local preview with `ctrl+rigthclick`

## Made with: 

- [VueRouter.js]
- [HTML]
- [CSS]
- [JavaScript]

