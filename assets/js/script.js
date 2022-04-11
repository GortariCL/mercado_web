$('document').ready(() => {

    const arrModal = async () => {
        let arrCompra = [];
        $('.imagen-producto').click((e) => {
            const imagen = {
                id: e.target.attributes.id.value,
                imagen: e.target.attributes.src.value,
            }

            if(arrCompra.length == 0){
                arrCompra.push(imagen);
                $(`#${imagen.id}`).css("opacity", 0.5);
            }else{
                const res = arrCompra.some(producto => producto.id === imagen.id);
                if(res){
                    arrCompra = arrCompra.filter((e, i) => e.id !== imagen.id);
                    $(`#${imagen.id}`).css("opacity", 1);                    
                }else{
                    arrCompra.push(imagen);
                    $(`#${imagen.id}`).css("opacity", 0.5);
                }
            }

            $('#productos-modal').html('');
            $(arrCompra).each((i, e) => {
                $('#productos-modal').append(`<img id="img-modal" class="imagen-producto mx-2" src="${e.imagen}">`);
            });
        });
    }    
    arrModal();
});