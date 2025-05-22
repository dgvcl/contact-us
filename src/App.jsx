
import suratPDF from './assets/fsurat-r.pdf';
import bharuchPDF from './assets/fbharuch.pdf';
import valsadPDF from './assets/fvalsad.pdf';
import suratCityPDF from './assets/fsurat-c.pdf';
const ContactUs = () => {
  return (
   <div className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
   <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8 border border-pink-200">
    <h1 className="text-3xl font-bold text-pink-600 mb-4 text-center">Contact Us</h1>
    <p className="text-gray-700 text-center mb-6 font-medium">
      Dakshin Gujarat Vij Company Limited
    </p>

    <div className="space-y-4 text-gray-800">
      <p><strong>Registered & Corporate Office:</strong><br />
        Urja Sadan, Nana Varachha Road,<br />
        Kapodara, SURAT-395 006
      </p>

      <p><strong>Phone no:</strong> (0261) 2506299</p>
      <p><strong>Fax No.:</strong> (0261) 2572636 / 2574251</p>
      <p><strong>Email:</strong> <a href="mailto:dgvcl@gebmail.com" className="text-pink-500 underline">dgvcl@gebmail.com</a></p>

      <div className="bg-pink-100 p-4 rounded border border-pink-200">
        <p className="font-semibold text-pink-700 mb-1">Customer Care:</p>
        <p>Complaints for power interruption, online payment, etc.</p>
        <p className="font-medium">1800-233-3003 / 19123</p>
      </div>

      <p className="mt-4">
        Respected consumers can lodge complaints directly to their local complaint center according to their subdivision (available on electricity bill) via the following contact numbers:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <a href ={suratPDF}>
        <div className="bg-pink-50 border border-pink-200 p-4 rounded">
          <p><strong>Surat Rural Circle Office</strong></p>
        </div>
        </a>
         <a href ={suratCityPDF}>
        <div className="bg-pink-50 border border-pink-200 p-4 rounded">
          <p><strong>Surat City Circle Office</strong></p>
        </div>
         </a>
       <a href = {bharuchPDF}>
        <div className="bg-pink-50 border border-pink-200 p-4 rounded">
          <p><strong>Bharuch Circle Office</strong></p>
        </div>
        </a>
         <a href = {valsadPDF}>
        <div className="bg-pink-50 border border-pink-200 p-4 rounded">
          <p><strong>Valsad Circle Office</strong></p>
        </div>
           </a>
      </div>
   
    </div>

    {/* Google Map (Inside same box) */}
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-pink-700 mb-2">Find Us on Map:</h2>
      <div className="w-full h-64 rounded overflow-hidden shadow-md border border-pink-200">
        <iframe
          title="DGVCL Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.792905350605!2d72.86892777472835!3d21.162123883858004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e94c6936e2d%3A0x1ac6e0e14b69b8f1!2sUrja%20Sadan%2C%20DGVCL!5e0!3m2!1sen!2sin!4v1716300000000"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</div>

  );
};

export default ContactUs;
