// https://www.terraform.io/docs/providers/oci/r/data_oci_database_vm_cluster_network_download_config_file.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "base64_encode_content": {
        "type": "bool",
        "optional": true
      },
      "content": {
        "type": "string",
        "computed": true
      },
      "exadata_infrastructure_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "vm_cluster_network_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig extends TerraformMetaArguments {
  readonly base64EncodeContent?: boolean;
  readonly exadataInfrastructureId: string;
  readonly vmClusterNetworkId: string;
}

// Resource

export class DataOciDatabaseVmClusterNetworkDownloadConfigFile extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_cluster_network_download_config_file',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._base64EncodeContent = config.base64EncodeContent;
    this._exadataInfrastructureId = config.exadataInfrastructureId;
    this._vmClusterNetworkId = config.vmClusterNetworkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64_encode_content - computed: false, optional: true, required: false
  private _base64EncodeContent?: boolean;
  public get base64EncodeContent() {
    return this._base64EncodeContent;
  }
  public set base64EncodeContent(value: boolean | undefined) {
    this._base64EncodeContent = value;
  }

  // content - computed: true, optional: false, required: true
  public get content() {
    return this.getStringAttribute('content');
  }

  // exadata_infrastructure_id - computed: false, optional: false, required: true
  private _exadataInfrastructureId: string;
  public get exadataInfrastructureId() {
    return this._exadataInfrastructureId;
  }
  public set exadataInfrastructureId(value: string) {
    this._exadataInfrastructureId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // vm_cluster_network_id - computed: false, optional: false, required: true
  private _vmClusterNetworkId: string;
  public get vmClusterNetworkId() {
    return this._vmClusterNetworkId;
  }
  public set vmClusterNetworkId(value: string) {
    this._vmClusterNetworkId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      base64_encode_content: this._base64EncodeContent,
      exadata_infrastructure_id: this._exadataInfrastructureId,
      vm_cluster_network_id: this._vmClusterNetworkId,
    };
  }
}
