<template>
    <div class="div_Formulario">
        <div class="div_Form">
            <form action="" class="form_Datos">
                <div class="div_Inputs">
                    <div class="div_LabelInput">
                        <label for="documento" class="form_Label"> DOCUMENTO DEL CLIENTE</label>
                        <input type="text" id="documento" name="documento" class="input_Control draw-border"
                            placeholder="Documento del cliente" required>
                        <span id="error-documento" class="error-message"></span>
                    </div>

                    <div class="div_LabelInput">
                        <label for="nombres" class="form_Label"> NOMBRES DEL CLIENTE</label>
                        <input type="text" id="nombres" name="nombres" class="input_Control draw-border"
                            placeholder="Nombres del cliente" required>
                        <span id="error-nombres" class="error-message"></span>
                    </div>

                    <div class="div_LabelInput">
                        <label for="apellidos" class="form_Label"> APELLIDOS DEL CLIENTE</label>
                        <input type="text" id="apellidos" name="apellidos" class="input_Control draw-border"
                            placeholder="Apellidos del cliente" required>
                        <span id="error-apellidos" class="error-message"></span>
                    </div>

                    <div class="div_LabelInput">
                        <label for="title" class="form_Label"> TITULO DEL EVENTO</label>
                        <input type="text" id="title" name="title" class="input_Control draw-border datepicker-hover"
                            placeholder="Titulo del evento" required>
                        <span id="error-title" class="error-message"></span>
                    </div>

                    <div class="div_Botones">
                        <button class="button">
                            <div class="icon"> <font-awesome-icon class="fa_icon" :icon="['far', 'floppy-disk']" />
                            </div>
                            <p class="p_Botones1">GUARDAR</p>
                        </button>
                        <button class="button">
                            <div class="icon"> <font-awesome-icon class="fa_icon" :icon="['far', 'pen-to-square']" />
                            </div>
                            <p class="p_Botones3">EDITAR</p>
                        </button>
                        <button class="button">
                            <div class="icon"> <font-awesome-icon class="fa_icon" :icon="['far', 'trash-can']" /> </div>
                            <p class="p_Botones1">ELIMINAR</p>
                        </button>
                        <button class="button" @click="goToCalendar">
                            <div class="icon"> <font-awesome-icon class="fa_icon" :icon="['fas', 'xmark']" /> </div>
                            <p class="p_Botones2">CANCELAR</p>
                        </button>
                    </div>

                </div>
            </form>

        </div>
    </div>
</template>

<script>
export default{
    methods: {
        goToCalendar(){
            this.$router.push({name: 'calendar'})
        }
    },
    created(){
        console.log(this.$route.params.selectedDate)
    },
}
</script>

<style>
@import url(../assets/css/formulario.css);
</style>

