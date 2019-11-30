from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.routing import Route, Mount
from starlette.templating import Jinja2Templates
from starlette.staticfiles import StaticFiles
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware


middleware = [
  Middleware(CORSMiddleware, allow_origins=['*']),
]

templates = Jinja2Templates(directory='templates')

async def entryform(request):
    return templates.TemplateResponse('entryform.html', {'request': request})


async def entryview(request):
    return templates.TemplateResponse('entryview.html', {'request': request})

app = Starlette(
    debug=True, 
    routes=[
        Route('/entryform/', entryform),
        Route('/entryview/', entryview),
    ],
    middleware=middleware
)
