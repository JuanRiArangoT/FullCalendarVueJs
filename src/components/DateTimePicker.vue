<template>
    <div>
        <input type="text" v-model="selectedDate" @click="showCalendar = true" readonly />
        <div v-if="showCalendar" class="calendar">
            <table>
                <thead>
                    <tr>
                        <th @click="prevMonth">&lt;</th>
                        <th colspan="6">
                            <select v-model="currentMonth">
                                <option v-for="month in months" :value="month">{{ month }}</option>
                            </select>

                            <select v-model="currentYear">
                                <option v-for="year in years" :value="year">{{ year }}</option>
                            </select>
                        </th>
                        <th @click="nextMonth">&gt;</th>
                    </tr>
                    <tr>
                        <th>Dom</th>
                        <th>Mar</th>
                        <th>Mie</th>
                        <th>Jue</th>
                        <th>Vie</th>
                        <th>Sab</th>
                        <th>Lun</th>
                    </tr>
                    <tr v-for="week in weeks">
                        <td v-for="day in week" :class="{ selected: day.selected }" @click="selectDate(day.date)">
                            {{ day.day }}
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            selectedDate: null,
            showCalendar: false,
            currentMonth: moment().format('MMMM'),
            currentYear: moment().format('YYYY'),
            years: Array.from({ length: 93 }, (_, i) => moment().year() - 90 + i),
            months: moment.months(),
            weeks: []
        }
    },
    methods: {
        selectDate(date) {
            this.selectedDate = moment(date).format('DD-MM-YYYY')
            this.showCalendar = false
        },
        prevMonth() {
            this.currentMonth = moment(this.currentMonth, 'MMMM').subtract(1, 'month').format('MMMM')
            this.currentYear = moment(this.currentYear, 'YYYY').subtract(1, 'year').format('YYYY')
            this.generateCalendar()
        },
        nextMonth() {
            this.currentMonth = moment(this.currentMonth, 'MMMM').add(1, 'month').format('MMMM')
            this.currentYear = moment(this.currentYear, 'YYYY').add(1, 'year').format('YYYY')
            this.generateCalendar()
        },
        generateCalendar() {
            let firstDay = moment(`${this.currentMonth} ${this.currentYear}`, "MMMM YYYY").startOf('month').weekday()
            let days = []
            for (let i = 1; i <= moment(`${this.currentMonth} ${this.currentYear}`, "MMMM YYYY").daysInMonth(); i++) {
                let day = moment(`${this.currentMonth} ${this.currentYear}`, "MMMM YYYY").date(i)
                days.push({
                    day: day.format('D'),
                    dayWeek: day.format('ddd'),
                    date: day.format('YYYY-MM-DD'),
                    selected: false
                })
            }
            let offset = moment(`${this.currentMonth} ${this.currentYear}`, "MMMM YYYY").startOf('month').weekday()
            let weeks = []
            let currentWeek = []
            for (let i = 0; i < days.length; i++) {
                currentWeek.push(days[i])
                if ((i + offset) % 7 === 0 || i === days.length - 1) {
                    weeks.push(currentWeek)
                    currentWeek = []
                }
            }
            this.weeks = weeks
        }
    },
    created() {
        this.generateCalendar()
    }

}
</script>

<style scoped>
.calendar {
    /* Estilos para el calendario */
}
</style>