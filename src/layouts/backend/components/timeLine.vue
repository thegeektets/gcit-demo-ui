<template>
  <div>
    <el-container>
        <el-row>
            <el-col>
                <el-card>
                    <div class="head">
                        <h3 class="title">Booking status</h3>
                    </div>
                    <ul class="updates">
                        <li class="update">
                            <span class="time">8:30am 5/07/22</span>
                            <p>Booked a car</p>
                        </li>
                        <li class="update">
                            <span class="time">8:35am 5/07/22</span>
                            <p>Order Confirmed</p>
                        </li>
                        <li class="update">
                            <span class="time">8:50am 5/07/22</span>
                            <p>Payment Completed</p>
                        </li>
                        <li class="update">
                            <span class="time">9:35am 5/07/22</span>
                            <p>Vehicle Delivered</p>
                        </li>
                        <li class="update">
                            <span class="time">9:50am 5/07/22</span>
                            <p>Started Trip</p>
                        </li>
                        <li class="update">
                            <span class="time">8:35am 5/07/22</span>
                            <p>Returned Vehicle</p>
                        </li>

                    </ul>
                </el-card>
            </el-col>
        </el-row>
    </el-container>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
* {
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}
.el-card::before,
.updates::before,
.updates .update::before {
    content: ""
}
.el-card::before,
.updates::before,
.updates .update::before {
    position: absolute;
}
.el-card,
.updates,
.updates .update {
    position: relative;
}
/* .el-container {
    min-height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
} */
.el-card {
     padding: 15px 15px  60px 30px ;
     border-radius: 3px;
     max-width: 320px;
     margin: 15px;
     box-shadow: 0 10px 15px black;
}
.el-card::before {
    width: 120%;
    height: 190px;
}
.head {
    margin-bottom: 20px;
    color: #555;
}
.head .title {
    font-size: 20px;
}
.updates {
    list-style: none;
}
.updates::before {
    height: 88%;
    width: 3px;
    background-color: #d1d6e6;
    left: -15px;
    top: 16px;
}
.updates .update {
    background-color: #fff;
    padding: 5px;
}
.updates .update::before {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: 50%;
    background-color: #409eff;
    transform: translateY(-50%);
    left: -21px
}
.update .time {
    font-weight: 700;
    font-size: 11px;
}
.update p {
    font-size: 13px;
    margin-top: 5px;
}

</style>