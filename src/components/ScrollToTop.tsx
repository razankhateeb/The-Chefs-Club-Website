export function ScrollToTop() {
    const scrollTop = document.querySelector('.scroll-top') as HTMLElement | null;
    if (scrollTop) {
        const togglescrollTop = function () {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
        window.addEventListener('load', togglescrollTop)
        document.addEventListener('scroll', togglescrollTop)
        scrollTop.addEventListener('click', () => window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }));
    }
    return <a href="#" className="scroll-top d-flex align-items-center justify-content-center" style={{color:'#fff', fontWeight:"bolder"}}>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>
    </a>


}