<template>
    <div>
        <p>测试页面</p>
        <Transaction></Transaction>
        <QuarterlyReport></QuarterlyReport>
    </div>
</template>

<script>
    import QuarterlyReport from "../components/QuarterlyReport";
    import Transaction from "../components/Transaction";
    export default {
        name: "Test",
        components:{QuarterlyReport,Transaction}
    }
</script>

<style scoped>

</style>