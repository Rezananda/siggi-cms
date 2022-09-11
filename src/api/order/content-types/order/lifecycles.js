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
                <div style="background-color: white">
                    <h3>Terima kasih sudah berbelanja di siggi.id.</h3>
                    <p>Berikut adalah ringkasan transaksimu pada ${new Date(order.createdAt).toLocaleTimeString('en-GB')}, ${new Date(order.createdAt).toLocaleDateString('en-GB')}.</p>
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
                        <div style="margin-bottom: 10px">
                            <h4 style="margin: 0; margin-bottom: 5px">Kode Pesanan:</h4>
                            <p style="margin: 0">${result.transaction_id}</p>
                        </div>
                    </div>
                    <div style="border-bottom: 1px solid; border-color:#d6d3d1; margin-bottom:10px"></div>
                    <div>
                        <h4 style="margin: 0; margin-bottom: 10px">RINGKASAN PEMBAYARAN</h4>
                        <div style="margin-bottom: 10px">
                            <h4 style="margin: 0;">Total Pesanan :</h4>
                            <p style="margin: 0; color: red; font-weight: bold">Rp. ${result.price_total}*</p>
                            <p style="font-size: 0.7rem">*Belum termasuk ongkos kirim</p>
                        </div>
                    </div>
                    <div style="border-bottom: 1px solid; border-color:#d6d3d1; margin-bottom:10px"></div>
                    <div style="margin-bottom: 10px; ">
                        <h4 style="margin: 0; margin-bottom: 10px">RINGKASAN PESANAN</h4>
                        <ul style="margin-bottom: 10px;">
                            ${result.detail_order.map((val, index) => (
                                `
                                <li style="margin-bottom: 5px;">
                                    <div></
                                    <p style="margin: 0;">${val.name} (${val.variant_name})</p>
                                    <p style="margin: 0; font-weight: bold">Rp: ${val.is_discount_variant ? val.variant_price_final : val.variant_price} (${val.qty})</p>
                                </li>
                                `
                            ))}
                        </ul>
                    </div>
                    <div style="background-color:#fcf3eb; padding: 1rem;">
                        <div style="display: flex; justify-content: right;">
                            <img src="https://res.cloudinary.com/dz80k02sq/image/upload/v1662888047/siggi_2_0e6e6af858.png?updated_at=2022-09-11T09:20:48.270Z" style="height: 36px; width: 36px; border-radius: 3px"/>
                        </div>
                        <div>
                            <p style="color:white; margin: 0; text-align:center; color: #b08e5a">Ikuti Kami</p>
                            <div style="display: flex; justify-content: center">
                                <a href="https://www.instagram.com/siggi.id/">
                                    <img src="https://img.icons8.com/fluency/36/000000/instagram-new.png" style="height: 36px; width: 36px"/>
                                </a>
                                <a href="https://www.tiktok.com/@siggi.id">
                                    <img src="https://img.icons8.com/color/36/000000/tiktok--v1.png" style="height: 36px; width: 36px"/>
                                </a>
                                <a href="http://siggi.netlify.app">
                                    <img src="https://img.icons8.com/fluency/36/000000/domain.png" style="height: 36px; width: 36px"/>
                                </a>
                            </div>
                            <p style="color: white; justify-content:center; font-size: 10px; text-align:center; color: #b08e5a">Copyright &copy; SIGGI. All Right Reserved</p>
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
 