import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer class="bg-white py-4 mt-auto">
        <div class="container px-5">
          <div class="row align-items-center justify-content-between flex-column flex-sm-row">
            <div class="col-auto">
              <div class="small m-0">Copyright © SengLyheng Portfolio 2023</div>
            </div>
            <div class="col-auto">
              <Link class="small" to="#!">
                Privacy
              </Link>
              <span class="mx-1">·</span>
              <Link class="small" to="#!">
                Terms
              </Link>
              <span class="mx-1">·</span>
              <Link class="small" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
