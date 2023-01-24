<template>
    <div>
        <input type="text" v-model="selectedDate" @click="showCalendar = true" readonly>
        <div v-if="showCalendar" class="calendar">
            <table>
                <thead>
                    <tr>
                        <th @click="prevMonth"> <font-awesome-icon class="fa_icon" :icon="['fa-solid', 'fa-arrow-left']" /> </th>
                        <th>
                            <select v-model="currentMonth">
                                <option v-for="month in months" :value="month">{{ month }}</option>
                            </select>
                            <select v-model="currentYear">
                                <option v-for="year in years" :value="year">{{ year }}</option>
                            </select>
                        </th>
                        <th @click="nextMonth"> <font-awesome-icon class="fa_icon" :icon="['fa-solid', 'fa-arrow-right']" /> </th>
                    </tr>
                    <tr>
                        <th> Dom</th>
                        <th> Lun</th>
                        <th> Mar</th>
                        <th> Mie</th>
                        <th> Jue</th>
                        <th> Vie</th>
                        <th> Sab</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="week in weeks">
                        <td v-for="day in week" :class="{'selected': selectedDate === day.date}" @click="selectedDate = day.date">
                            {{ day.date }} <br> {{ day.day }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import moment, { months } from 'moment';

export default {
    data() {
        return {
            selectedDate: null,
            showCalendar: false,
            months: moment.months(),
            currentMonth: moment().format('MMMM'),
            currentYear: moment().format('YYYY'),
            years: Array.from({ length: 93 }, (_, i) => moment().year() - 90 + i),
            weeks: [],
        }
    },
    methods: {
        selectedDate(date) {

        }
    },
    computed:{
        currentDays(){
            let days = []
            let startOfMonth = moment().year(this.currentYear).month(this.currentMonth).startOf('month')
            let endOfMonth = moment().year(this.currentYear).month(this.currentMonth).endOf('month')
            let current = startOfMonth
            while(current <= endOfMonth){
                days.push({
                    date: current.date(),
                    day: current.format('dddd'),
                })
                current.add(1, day)
            }
            let chunks = chunk(days, 7)
            return chunks
        }
    },
    mounted(){
        this.weeks = this.currentDays
    }
}
</script>