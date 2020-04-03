<template>
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <div>
            <section class="sidebar">
                <!-- /.search form -->
                <!-- Sidebar user panel -->
                <div class="user-panel">
                    <div class="image"> <img src="/static/img/avatar2.png" class="img-circle" alt="User Image"> </div>
                    <div class="info">
                        <p>Good Job, Matirasa</p>
                        <p><small>You haven,t miss any task this week!</small></p>
                        <div> <a href="#"><i class="ti-panel"></i><small>Settings</small></a> <a href="#"><i class="ti-user"></i><small>Profile</small></a> <a href="#"><i class="ti-power-off"></i><small>Logout</small></a> </div>
                    </div> <img class="bg-user" src="/static/img/avatar-bg.png" alt="User Image"> </div>
                <!-- sidebar menu: : style can be found in sidebar.less -->
                <ul class="sidebar-menu">
                    <li class="header">APPS</li>
                    <li>
                        <router-link to="/admin/vendors"> <i class="ti-desktop"></i> <span>Vendors</span> </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/products"> <i class="ti-package"></i> <span>Products</span> </router-link>
                    </li>
                </ul>
            </section>
            <!-- /.sidebar -->
        </div>
    </aside>
</template>
<script>
import Avatar from 'vue-avatar'
export default {
  name: 'DashboardSidebar',
  mounted: function () {
    $(document).ready(function ($) {
      $('.main-sidebar > div').slimScroll({
        width: '230px',
        position: 'left',
        size: '5px',
        height: '95vh'
      })
    })
  },
  components: {
    Avatar
  }
}
</script>