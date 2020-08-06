// https://www.terraform.io/docs/providers/oci/r/database_exadata_infrastructure.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "activation_file": {
        "type": "string",
        "optional": true
      },
      "admin_network_cidr": {
        "type": "string",
        "required": true
      },
      "cloud_control_plane_server1": {
        "type": "string",
        "required": true
      },
      "cloud_control_plane_server2": {
        "type": "string",
        "required": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "corporate_proxy": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cpus_enabled": {
        "type": "number",
        "computed": true
      },
      "data_storage_size_in_tbs": {
        "type": "number",
        "computed": true
      },
      "db_node_storage_size_in_gbs": {
        "type": "number",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "required": true
      },
      "dns_server": {
        "type": [
          "list",
          "string"
        ],
        "required": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "gateway": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "infini_band_network_cidr": {
        "type": "string",
        "required": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "max_cpu_count": {
        "type": "number",
        "computed": true
      },
      "max_data_storage_in_tbs": {
        "type": "number",
        "computed": true
      },
      "max_db_node_storage_in_gbs": {
        "type": "number",
        "computed": true
      },
      "max_memory_in_gbs": {
        "type": "number",
        "computed": true
      },
      "memory_size_in_gbs": {
        "type": "number",
        "computed": true
      },
      "netmask": {
        "type": "string",
        "required": true
      },
      "ntp_server": {
        "type": [
          "list",
          "string"
        ],
        "required": true
      },
      "shape": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_zone": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DatabaseExadataInfrastructureConfig extends TerraformMetaArguments {
  readonly activationFile?: string;
  readonly adminNetworkCidr: string;
  readonly cloudControlPlaneServer1: string;
  readonly cloudControlPlaneServer2: string;
  readonly compartmentId: string;
  readonly corporateProxy?: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName: string;
  readonly dnsServer: string[];
  readonly freeformTags?: { [key: string]: string };
  readonly gateway: string;
  readonly infiniBandNetworkCidr: string;
  readonly netmask: string;
  readonly ntpServer: string[];
  readonly shape: string;
  readonly timeZone: string;
  /** timeouts block */
  readonly timeouts?: DatabaseExadataInfrastructureTimeouts;
}
export interface DatabaseExadataInfrastructureTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseExadataInfrastructure extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseExadataInfrastructureConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_exadata_infrastructure',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._activationFile = config.activationFile;
    this._adminNetworkCidr = config.adminNetworkCidr;
    this._cloudControlPlaneServer1 = config.cloudControlPlaneServer1;
    this._cloudControlPlaneServer2 = config.cloudControlPlaneServer2;
    this._compartmentId = config.compartmentId;
    this._corporateProxy = config.corporateProxy;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._dnsServer = config.dnsServer;
    this._freeformTags = config.freeformTags;
    this._gateway = config.gateway;
    this._infiniBandNetworkCidr = config.infiniBandNetworkCidr;
    this._netmask = config.netmask;
    this._ntpServer = config.ntpServer;
    this._shape = config.shape;
    this._timeZone = config.timeZone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_file - computed: false, optional: true, required: false
  private _activationFile?: string;
  public get activationFile() {
    return this._activationFile;
  }
  public set activationFile(value: string | undefined) {
    this._activationFile = value;
  }

  // admin_network_cidr - computed: false, optional: false, required: true
  private _adminNetworkCidr: string;
  public get adminNetworkCidr() {
    return this._adminNetworkCidr;
  }
  public set adminNetworkCidr(value: string) {
    this._adminNetworkCidr = value;
  }

  // cloud_control_plane_server1 - computed: false, optional: false, required: true
  private _cloudControlPlaneServer1: string;
  public get cloudControlPlaneServer1() {
    return this._cloudControlPlaneServer1;
  }
  public set cloudControlPlaneServer1(value: string) {
    this._cloudControlPlaneServer1 = value;
  }

  // cloud_control_plane_server2 - computed: false, optional: false, required: true
  private _cloudControlPlaneServer2: string;
  public get cloudControlPlaneServer2() {
    return this._cloudControlPlaneServer2;
  }
  public set cloudControlPlaneServer2(value: string) {
    this._cloudControlPlaneServer2 = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // corporate_proxy - computed: true, optional: true, required: false
  private _corporateProxy?: string;
  public get corporateProxy() {
    return this._corporateProxy ?? this.getStringAttribute('corporate_proxy');
  }
  public set corporateProxy(value: string | undefined) {
    this._corporateProxy = value;
  }

  // cpus_enabled - computed: true, optional: false, required: true
  public get cpusEnabled() {
    return this.getNumberAttribute('cpus_enabled');
  }

  // data_storage_size_in_tbs - computed: true, optional: false, required: true
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }

  // db_node_storage_size_in_gbs - computed: true, optional: false, required: true
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // dns_server - computed: false, optional: false, required: true
  private _dnsServer: string[];
  public get dnsServer() {
    return this._dnsServer;
  }
  public set dnsServer(value: string[]) {
    this._dnsServer = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway: string;
  public get gateway() {
    return this._gateway;
  }
  public set gateway(value: string) {
    this._gateway = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // infini_band_network_cidr - computed: false, optional: false, required: true
  private _infiniBandNetworkCidr: string;
  public get infiniBandNetworkCidr() {
    return this._infiniBandNetworkCidr;
  }
  public set infiniBandNetworkCidr(value: string) {
    this._infiniBandNetworkCidr = value;
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // max_cpu_count - computed: true, optional: false, required: true
  public get maxCpuCount() {
    return this.getNumberAttribute('max_cpu_count');
  }

  // max_data_storage_in_tbs - computed: true, optional: false, required: true
  public get maxDataStorageInTbs() {
    return this.getNumberAttribute('max_data_storage_in_tbs');
  }

  // max_db_node_storage_in_gbs - computed: true, optional: false, required: true
  public get maxDbNodeStorageInGbs() {
    return this.getNumberAttribute('max_db_node_storage_in_gbs');
  }

  // max_memory_in_gbs - computed: true, optional: false, required: true
  public get maxMemoryInGbs() {
    return this.getNumberAttribute('max_memory_in_gbs');
  }

  // memory_size_in_gbs - computed: true, optional: false, required: true
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }

  // netmask - computed: false, optional: false, required: true
  private _netmask: string;
  public get netmask() {
    return this._netmask;
  }
  public set netmask(value: string) {
    this._netmask = value;
  }

  // ntp_server - computed: false, optional: false, required: true
  private _ntpServer: string[];
  public get ntpServer() {
    return this._ntpServer;
  }
  public set ntpServer(value: string[]) {
    this._ntpServer = value;
  }

  // shape - computed: false, optional: false, required: true
  private _shape: string;
  public get shape() {
    return this._shape;
  }
  public set shape(value: string) {
    this._shape = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone: string;
  public get timeZone() {
    return this._timeZone;
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseExadataInfrastructureTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseExadataInfrastructureTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      activation_file: this._activationFile,
      admin_network_cidr: this._adminNetworkCidr,
      cloud_control_plane_server1: this._cloudControlPlaneServer1,
      cloud_control_plane_server2: this._cloudControlPlaneServer2,
      compartment_id: this._compartmentId,
      corporate_proxy: this._corporateProxy,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      dns_server: this._dnsServer,
      freeform_tags: this._freeformTags,
      gateway: this._gateway,
      infini_band_network_cidr: this._infiniBandNetworkCidr,
      netmask: this._netmask,
      ntp_server: this._ntpServer,
      shape: this._shape,
      time_zone: this._timeZone,
      timeouts: this._timeouts,
    };
  }
}
