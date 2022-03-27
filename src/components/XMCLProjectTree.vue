<template>
    <div class="ui inverted list">
        <div class="item">
            <i class="folder icon"></i>
            <div class="content">
                <div class="header">.minecraft</div>
                <div class="description">这个是受 XMCL 管理实例文件夹</div>
                <div class="list">
                    <div class="item">
                        <i class="folder icon"></i>
                        <div class="content">
                            <div class="header">logs</div>
                        </div>
                    </div>
                    <div class="item">
                        <i class="folder icon"></i>
                        <div class="content">
                            <div class="header">mods</div>
                            <div class="description"></div>
                            <div class="list">
                                <div class="item">
                                    <i class="box icon"></i>
                                    <div class="content">
                                        <div class="header">modA.jar</div>
                                        <div class="description">这个是一个硬链接，指向实际的 Mod jar 文件</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <i class="linkify icon"></i>
                        <div class="content">
                            <div class="header">resourcepacks </div>
                            <div class="description"> 这个是一个软连接，指向一个公用的资源包仓库地址</div>
                        </div>
                    </div>
                    <div class="item">
                        <i class="linkify icon"></i>
                        <div class="content">
                            <div class="header">shaderpacks</div>
                            <div class="description"> 这个是一个软连接，指向一个公用的资源包仓库地址</div>
                        </div>
                    </div>
                    <div class="item">
                        <i class="folder icon"></i>
                        <div class="content">
                            <div class="header">saves</div>
                            <div class="description"></div>
                        </div>
                    </div>
                    <div class="item">
                        <i class="folder icon"></i>
                        <div class="content">
                            <div class="header">logs</div>
                            <div class="description"></div>
                        </div>
                    </div>
                    <div class="item">
                        <i class="file code icon"></i>
                        <div class="content">
                            <div class="header">instance.json</div>
                            <div class="description">实例的配置文件，包含比如用什么java，启动什么版本，内存多少等信息</div>
                        </div>
                    </div>
                    <div class="item">
                        <i class="file code icon"></i>
                        <div class="content">
                            <div class="header">options.txt</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang=ts>
</script>
