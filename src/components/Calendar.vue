<template>

    <div class="div_Fullcalendar">
        
        <FullCalendar :options="calendarOptions" />
    </div>

</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGrid from '@fullcalendar/timegrid'
import list from '@fullcalendar/list'


export default {
    components: {
        FullCalendar,
    },
    data() {
        return {
            selectDate: null,
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin, timeGrid, list],
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: "prev next today",
                    center: "title",
                    right: "dayGridMonth timeGridWeek listWeek",
                    textColor: '#91A3B0'
                },
                locale: 'es',
                slotMinTime: "08:00:00",
                slotMaxTime: "19:00:00",
                slotDuration: "01:00:00",
                eventDidMount: this.eventDidMount,
                dateClick: (info) =>{
                    this.selectedDate = info.dateStr;
                    this.goToForm();
                }
            },
        }
    },
    methods: {
        goToForm(){
            this.$router.push({name: 'datos', params: {selectedDate:this.selectedDate}})
        }
    }
}

</script>

<style>
@import url(../assets/css/calendario.css)

</style>