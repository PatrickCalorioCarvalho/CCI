from django.views.generic.base import TemplateView



class MonitorView(TemplateView):
    template_name = "index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["usuario_count"] = "10"
        context["setor_count"] = "5"
        context["mysql_service"] = "ON"
        context["disco_use"] = "22"
        context["memoria_use"] = "0.5"
        context["cpu_use"] = "80"
        return context