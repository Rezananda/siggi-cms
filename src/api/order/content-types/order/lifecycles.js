module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try{
            await strapi.plugins['email'].services.email.send({
                to: result.email,
                from: 'siggistore@mail.com',
                replyTo: 'siggistore@mail.com',
                subject: `Pesanan ${result.transaction_id}`,
                html: `
                <div style="padding: 1rem; background-color: white">
                    <h3>Terima kasih sudah berbelanja di siggi.id.</h3>
                    <div style="margin-bottom: 10px; background-color: #f5f5f4; padding: 10px; border-radius: 5px">
                        <div style="margin-bottom: 10px">
                            <h4 style="margin: 0;">Nama:</h4>
                            <p style="margin: 0">${result.name}</p>
                        </div>
                        <div style="margin-bottom: 10px">
                            <h4 style="margin: 0;">Alamat Pengiriman:</h4>
                            <p style="margin: 0">${result.address}</p>
                        </div>
                        <div style="margin-bottom: 10px">
                            <h4 style="margin: 0">No. Handphone:</h4>
                            <p style="margin: 0">${result.phone_number}</p>
                        </div>
                        <div style="margin-bottom: 10px">
                            <h4 style="margin: 0; margin-bottom: 5px">Status:</h4>
                            <p style="margin: 0">Menunggu Pembayaran</p>
                        </div>
                    </div>
                    <div style="border-bottom: 1px solid; border-color:#d6d3d1; margin-bottom:10px"></div>
                    <div>
                        <h4 style="margin: 0; margin-bottom: 10px">RINGKASAN PEMBAYARAN</h4>
                        <div style="margin-bottom: 10px">
                            <h4 style="margin: 0;">Total Bayar:</h4>
                            <p style="margin: 0; color: red; font-weight: bold">Rp. ${result.price_total}</p>
                        </div>
                    </div>
                    <div style="border-bottom: 1px solid; border-color:#d6d3d1; margin-bottom:10px"></div>
                    <div style="margin-bottom: 10px; ">
                        <h4 style="margin: 0; margin-bottom: 10px">RINGKASAN PESANAN</h4>
                        <ul style="margin-bottom: 10px;">
                            ${result.detail_order.map((val, index) => (
                                `
                                <li style="margin-bottom: 5px;">
                                    <p style="margin: 0;">${val.name}</p>
                                    <p style="margin: 0; font-weight: bold">Rp: ${val.variant_price_final}</p>
                                </li>
                                `
                            ))}
                        </ul>
                    </div>
                    <div style="background-color:black; padding: 1rem;">
                        <div>
                            <p style="color:white; margin: 0;">Ikuti Kami</p>
                            <div style="display: flex;">
                                <a href="https://www.w3schools.com">
                                    <img src="https://img.icons8.com/fluency/36/000000/instagram-new.png" style="height: 36px; width: 36px"/>
                                </a>
                                <img src="https://img.icons8.com/color/36/000000/tiktok--v1.png" style="height: 36px; width: 36px"/>
                                <img src="https://img.icons8.com/fluency/36/000000/domain.png" style="height: 36px; width: 36px"/>
                            </div>
                            <p style="color: white; justify-content:center; font-size: 10px">Copyright &copy; SIGGI. All Right Reserved</p>
                        </div>
                    </div>
                </div>
                `,  
            })
        } catch(err) {
            console.log(err);
        }
    }
}
 