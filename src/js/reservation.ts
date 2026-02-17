export default function reservationModal() {
    return {
        isOpen: false as boolean,
        selectedPackage: null as string | null,
        loading: false as boolean,
        success: false as boolean,

        open(packageName: string) {
            this.selectedPackage = packageName;
            this.isOpen = true;
        },

        close() {
            this.isOpen = false;
            this.success = false;
        },

        async submitForm(form: HTMLFormElement) {
            this.loading = true;

            const formData = new FormData(form);

            try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbwZ_fWdCb3R-2humhMvHXAnIYGd_DzejOH32svrVGWV8OYFnEjdb0S1hgbc5Pm7dOmCvg/exec", {
                    method: "POST",
                    mode: "cors",
                    redirect: "follow",
                    body: formData
                });

                if (response.ok) {
                    this.success = true;
                    form.reset();
                    console.log("Form submitted successfully", response);
                    setTimeout(() => {
                        this.close();
                    }, 2000);
                }
            } catch (error) {
                alert("Terjadi kesalahan. Silakan coba lagi.");
                console.error("Form submission error", error);
            }

            this.loading = false;
        }
    }
}