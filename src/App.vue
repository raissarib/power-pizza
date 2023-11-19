<template>

<div>
    <NavBar></NavBar>
    <HomeSection></HomeSection>
    <MenuSection></MenuSection>
    <OrderSection></OrderSection>
    <AboutSection></AboutSection>
    <ContactSection></ContactSection>
    <FooterSection></FooterSection>
  </div>

</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HomeSection from "@/components/HomeSection.vue";
import MenuSection from "@/components/MenuSection.vue";
import OrderSection from "@/components/OrderSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
    name: "App",
    components: {
      NavBar,
      HomeSection,
      MenuSection,
      OrderSection,
      AboutSection,
      ContactSection,
      FooterSection,
    }
}


</script>

<style>

</style>
