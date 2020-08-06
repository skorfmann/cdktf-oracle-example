// https://www.terraform.io/docs/providers/oci/r/data_oci_database_exadata_infrastructure.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "activation_file": {
        "type": "string",
        "computed": true
      },
      "admin_network_cidr": {
        "type": "string",
        "computed": true
      },
      "cloud_control_plane_server1": {
        "type": "string",
        "computed": true
      },
      "cloud_control_plane_server2": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "corporate_proxy": {
        "type": "string",
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
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "dns_server": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "exadata_infrastructure_id": {
        "type": "string",
        "required": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "gateway": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "infini_band_network_cidr": {
        "type": "string",
        "computed": true
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
        "computed": true
      },
      "ntp_server": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "shape": {
        "type": "string",
        "computed": true
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
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataOciDatabaseExadataInfrastructureConfig extends TerraformMetaArguments {
  readonly exadataInfrastructureId: string;
}

// Resource

export class DataOciDatabaseExadataInfrastructure extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseExadataInfrastructureConfig) {
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
    this._exadataInfrastructureId = config.exadataInfrastructureId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_file - computed: true, optional: false, required: true
  public get activationFile() {
    return this.getStringAttribute('activation_file');
  }

  // admin_network_cidr - computed: true, optional: false, required: true
  public get adminNetworkCidr() {
    return this.getStringAttribute('admin_network_cidr');
  }

  // cloud_control_plane_server1 - computed: true, optional: false, required: true
  public get cloudControlPlaneServer1() {
    return this.getStringAttribute('cloud_control_plane_server1');
  }

  // cloud_control_plane_server2 - computed: true, optional: false, required: true
  public get cloudControlPlaneServer2() {
    return this.getStringAttribute('cloud_control_plane_server2');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // corporate_proxy - computed: true, optional: false, required: true
  public get corporateProxy() {
    return this.getStringAttribute('corporate_proxy');
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

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dns_server - computed: true, optional: false, required: true
  public get dnsServer() {
    return this.getListAttribute('dns_server');
  }

  // exadata_infrastructure_id - computed: false, optional: false, required: true
  private _exadataInfrastructureId: string;
  public get exadataInfrastructureId() {
    return this._exadataInfrastructureId;
  }
  public set exadataInfrastructureId(value: string) {
    this._exadataInfrastructureId = value;
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // gateway - computed: true, optional: false, required: true
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // infini_band_network_cidr - computed: true, optional: false, required: true
  public get infiniBandNetworkCidr() {
    return this.getStringAttribute('infini_band_network_cidr');
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

  // netmask - computed: true, optional: false, required: true
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // ntp_server - computed: true, optional: false, required: true
  public get ntpServer() {
    return this.getListAttribute('ntp_server');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: true, optional: false, required: true
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      exadata_infrastructure_id: this._exadataInfrastructureId,
    };
  }
}
