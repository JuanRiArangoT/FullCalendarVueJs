<template>

    <div class="div_Formulario">
        <div class="div_Form">
            <form action="" class="form_Datos">
                <div class="div_Inputs">
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
                    <label for="contrasena" class="form_Label"> CONTRASEÑA</label>
                    <input type="text" id="contrasena" name="contrasena" class="input_Control draw-border"
                        placeholder="Contraseña" required>
                    <span id="error-contrasena" class="error-message"></span>
                </div>
            </form>

            <div class="div_Botones">
                <button class="button" @click="goToLogin">
                    <div class="icon"> <font-awesome-icon class="fa_icon" :icon="['fas', 'sign']" /> </div>
                    <p class="p_Botones1"> INGRESAR</p>
                </button>
                <button class="button" @click="goToLogin2">
                    <div class="icon"> <font-awesome-icon class="fa_icon" :icon="['far', 'pen-to-square']" /> </div>
                    <p class="p_Botones2"> REGISTRAR</p>
                </button>
            </div>
            
            
        </div>
        <div class="div_h2Recuperar">
                <h2 class="h2_Recuperar"><a href=""> RECUPERAR CONTRASEÑA</a></h2>
            </div>
    </div>

</template>

<script>

export default{
    methods: {
        goToLogin(){
            this.$router.push({name: 'login'})
        },
        goToLogin2(){
            this.$router.push({name: 'login'})
        }
    }
}

</script>

<style>
@import url(../assets/css/registrar.css)
</style>
