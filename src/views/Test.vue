<template>
    <div>
        <p>测试页面</p>
        <KLine></KLine>
        <QuarterlyReport></QuarterlyReport>
    </div>
</template>

<script>
    import KLine from "../components/KLine";
    import QuarterlyReport from "../components/QuarterlyReport";
    export default {
        name: "Test",
        components:{KLine,QuarterlyReport}
    }
</script>

<style scoped>

</style>