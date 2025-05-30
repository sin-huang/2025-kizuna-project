<script setup>
import HeroSection from "@/components/HeroSection.vue";
import FeatureSection from "@/components/FeatureSection.vue";
import EventCarousel from "@/components/EventCarousel.vue";
import HowToUseSection from "@/components/HowToUseSection.vue";
import MemberShowcase from "@/components/MemberShowcase.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="bg-[#F8F9FA]">
    <HeroSection />
    <FeatureSection />
    <EventCarousel />
    <HowToUseSection />
    <MemberShowcase :members="myMemberList" />
    <!-- 假設 myMemberList 是從父組件傳遞過來的成員列表 -->
    <Footer />
  </div>
</template>
